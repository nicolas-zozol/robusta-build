interface AutocompleteBoxOptions {
  container: HTMLElement // The parent `position: relative` container
  fetch: (matchString: string) => Promise<string[]> // Fetch logic for autocomplete items
  onSelect: (selectedItem: string) => void // Callback when an item is selected
  onClose: () => void // Optional callback when the box is dismissed
}

let singleton: AutocompleteBox | undefined = undefined

export function getAutocompleteBox(): AutocompleteBox | undefined {
  return singleton
}

export function setAutocompleteBox(box: AutocompleteBox) {
  singleton = box
}

export function resetAutocompleteBox() {
  singleton = undefined
}

export class AutocompleteBox {
  private container: HTMLElement
  private readonly fetch: (matchString: string) => Promise<string[]>
  public onSelect: (selectedItem: string) => void
  public onClose: () => void
  private box: HTMLDivElement
  private items: string[] = []
  private activeIndex: number = -1 // For keyboard navigation

  constructor(options: AutocompleteBoxOptions) {
    const { container, fetch, onSelect, onClose } = options
    this.container = container
    this.fetch = fetch
    this.onSelect = onSelect
    this.onClose = onClose

    this.box = this.initBox()
  }

  /**
   * Sets the position of the autocomplete box relative to its container.
   * @param x - The x-coordinate.
   * @param y - The y-coordinate.
   */
  setPosition(x: number, y: number): void {
    this.box.style.left = `${x}px`
    this.box.style.top = `${y}px`
    this.box.style.position = 'absolute'
  }

  /**
   * Updates the items in the autocomplete box based on the input.
   * @param input - The input string to fetch items for.
   */
  async update(input: string): Promise<void> {
    this.items = await this.fetch(input)
    this.render()
  }

  private initBox(): HTMLDivElement {
    this.activeIndex = 0
    const box = document.createElement('div')
    box.className = 'autocomplete-box'
    this.container.appendChild(box)
    this.container.classList.add('autocomplete-root')

    setAutocompleteBox(this)
    return box
  }

  /**
   * Renders the items in the autocomplete box.
   */
  private render(): void {
    this.box.innerHTML = ''
    const htmlItems: HTMLDivElement[] = []

    this.items.forEach((item, index) => {
      const suggestionItem = document.createElement('div')
      suggestionItem.setAttribute('data-index', index.toString())
      suggestionItem.className = 'suggestion-item'
      suggestionItem.textContent = item
      suggestionItem.addEventListener('click', () => this.onSelect(item))
      this.box.appendChild(suggestionItem)
      htmlItems.push(suggestionItem)
    })

    // setting htmlItem active on hovering
    htmlItems.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        const itemIndex = Number(item.getAttribute('data-index') || '0')
        item.classList.add('active')
        this.activeIndex = index
        // setting other inactive
        htmlItems.forEach((i, idx) => {
          if (idx !== itemIndex) {
            i.classList.remove('active')
          }
        })
      })
    })
  }

  /**
   * Closes the autocomplete box and triggers the onClose callback if provided.
   */
  close(): void {
    this.box.remove()
    if (this.onClose) {
      this.onClose()
    }
    this.container.classList.remove('autocomplete-root')
    resetAutocompleteBox()
  }

  // Selects an item programmatically
  private selectItem(index: number): void {
    if (index < 0 || index >= this.items.length) return

    const selectedItem = this.items[index]
    this.onSelect(selectedItem)
    this.close()
  }

  // Handles keyboard navigation
  public handleKeyDown(event: KeyboardEvent): void {
    if (!this.box || this.items.length === 0) return

    switch (event.key) {
      case 'ArrowDown':
        this.activeIndex = (this.activeIndex + 1) % this.items.length
        this.render()
        break
      case 'ArrowUp':
        this.activeIndex =
          (this.activeIndex - 1 + this.items.length) % this.items.length
        this.render()
        break
      case 'Enter':
        if (this.activeIndex !== -1) {
          this.selectItem(this.activeIndex)
        }
        break
      case 'Escape':
        this.close()
        break
    }
  }
}

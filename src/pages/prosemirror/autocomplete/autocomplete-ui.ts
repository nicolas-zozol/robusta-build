interface AutocompleteBoxOptions {
  container: HTMLElement // The parent `position: relative` container
  fetch: (matchString: string) => Promise<string[]> // Fetch logic for autocomplete suggestions
  onSelect: (selectedItem: string) => void // Callback when an item is selected
  onClose?: () => void // Optional callback when the box is dismissed
}

class AutocompleteBox {
  private container: HTMLElement
  private fetchSuggestions: (matchString: string) => Promise<string[]>
  private onSelect: (selectedItem: string) => void
  private onClose?: () => void

  private boxElement: HTMLDivElement | null = null
  private items: string[] = []
  private activeIndex: number = -1 // For keyboard navigation

  constructor(options: AutocompleteBoxOptions) {
    this.container = options.container
    this.fetchSuggestions = options.fetch
    this.onSelect = options.onSelect
    this.onClose = options.onClose

    this.initBox()
  }

  // Initializes the visual box
  private initBox(): void {
    console.log('Initializing autocomplete box', this.container)

    this.container.className = this.container.className + ' autocomplete-root'

    this.boxElement = document.createElement('div')
    this.boxElement.className = 'autocomplete-box'
    this.boxElement.style.position = 'absolute'
    this.boxElement.style.visibility = 'hidden' // Hide initially
    this.boxElement.style.zIndex = '1000' // Ensure it's above other elements

    const testElement = document.createElement('div')
    testElement.textContent = 'test'

    this.boxElement.appendChild(testElement) // Placeholder for items
    this.container.appendChild(this.boxElement)

    this.boxElement.addEventListener('click', event => {
      const target = event.target as HTMLElement
      const index = target.getAttribute('data-index')
      if (index !== null) {
        this.selectItem(Number(index))
      }
    })

    setTimeout(() => {
      console.log('Autocomplete box initialized', this.container)
    }, 500)
  }

  // Updates the box position
  public setPosition(x: number, y: number): void {
    if (!this.boxElement) return
    this.boxElement.style.left = `${x}px`
    this.boxElement.style.top = `${y}px`
  }

  // Triggers fetching and updates the box
  public async update(matchString: string): Promise<void> {
    if (!this.boxElement) return

    // Fetch suggestions
    this.items = await this.fetchSuggestions(matchString)
    this.activeIndex = -1 // Reset active index
    this.render()
    console.log('Autocomplete updated with items:', this.items)
  }

  // Renders the items in the box
  private render(): void {
    if (!this.boxElement) return

    this.boxElement.innerHTML = '' // Clear previous content

    if (this.items.length === 0) {
      //this.boxElement.style.display = 'none'
      this.boxElement.style.visibility = 'hidden'
      return
    }

    //this.boxElement.style.display = 'block'
    this.boxElement.style.visibility = 'visible'
    this.activeIndex = 0
    const htmlItems: HTMLDivElement[] = []

    this.items.forEach((item, index) => {
      const itemElement = document.createElement('div')
      itemElement.className = 'autocomplete-item'
      itemElement.textContent = item
      itemElement.setAttribute('data-index', index.toString())

      // Highlight active item
      if (index === this.activeIndex) {
        itemElement.classList.add('active')
      }

      this.boxElement?.appendChild(itemElement)
      htmlItems.push(itemElement)
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

  // Selects an item programmatically
  private selectItem(index: number): void {
    if (index < 0 || index >= this.items.length) return

    const selectedItem = this.items[index]
    this.onSelect(selectedItem)
    this.close()
  }

  // Handles keyboard navigation
  public handleKeyDown(event: KeyboardEvent): void {
    if (!this.boxElement || this.items.length === 0) return

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

  // Closes the box
  public close(): void {
    if (this.boxElement) {
      this.boxElement.style.display = 'none'
    }
    if (this.onClose) {
      this.onClose()
    }
  }

  // Cleans up DOM and event listeners
  public destroy(): void {
    if (this.boxElement) {
      this.boxElement.remove()
      this.boxElement = null
    }
  }
}

export default AutocompleteBox

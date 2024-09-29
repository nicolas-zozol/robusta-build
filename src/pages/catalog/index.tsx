import Link from "next/link";
import * as React from "react";
import {ShyLink} from "../../components/theme/TLink";
import {ComponentCatalog} from "../../components/catalog/ComponentCatalog";


export default function Catalog() {
    return (
        <>
            <h1 className={'card'}>Catalog</h1>
            <h2 className={''}>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <ShyLink out={"https://www.robusta.io"}>
                Head grey uppercase link
            </ShyLink>
            <div suppressHydrationWarning>
                {typeof window === 'undefined' ? null : <ComponentCatalog/>}
            </div>


        </>
    )
}

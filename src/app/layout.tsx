import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Mammad Yahyayev's blog",
    description: 'Plenty of blogs waits you like treasure!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Mammad Yahyayev</title>
            </head>
            <body>
                <div id="root">{children}</div>
                <script type="module" src="/src/main.tsx"></script>
            </body>
        </html>
    )
}
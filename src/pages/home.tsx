import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
      <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <LogInIcon className="w-8 h-8" />
          <h1 className="text-2xl font-bold">AI Generator</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="#" className="text-gray-700" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-gray-700" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-gray-700" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-gray-700" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="w-full max-w-6xl p-4 space-y-8">
        <section className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex-1 space-y-2">
            <h2 className="text-3xl font-bold">無料のオンラインAI画像生成機能</h2>
            <p className="text-gray-700">AIを活用して、簡単に画像を生成できます。</p>
            <Button className="mt-4">今すぐ試す</Button>
          </div>
          <img
            src="/placeholder.svg"
            alt="AI Image"
            className="w-full max-w-md"
            width="400"
            height="300"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">CanvasのAI画像生成機能</h2>
          <p className="text-gray-700">Canvasを使って、AI画像生成を体験しましょう。</p>
          <img
            src="/placeholder.svg"
            alt="Canvas AI"
            className="w-full max-w-md"
            width="400"
            height="200"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">簡単にスタイルを変更する</h2>
          <p className="text-gray-700">AIを使って、画像のスタイルを簡単に変更できます。</p>
          <Button className="mt-4">今すぐ試す</Button>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">マジックのように写真を修正する</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="option1" />
              <label htmlFor="option1" className="text-gray-700">
                オプション1
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option2" />
              <label htmlFor="option2" className="text-gray-700">
                オプション2
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option3" />
              <label htmlFor="option3" className="text-gray-700">
                オプション3
              </label>
            </div>
          </div>
          <Button className="mt-4">今すぐ試す</Button>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">便利な画像生成ツール</h2>
          <p className="text-gray-700">様々なツールを使って、画像を簡単に生成できます。</p>
          <Button className="mt-4">今すぐ試す</Button>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">すべてのクリエイティブな活動を支援</h2>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <Clock1Icon className="w-12 h-12" />
              <p className="text-gray-700">ツール1</p>
            </div>
            <div className="flex flex-col items-center">
              <Link2Icon className="w-12 h-12" />
              <p className="text-gray-700">ツール2</p>
            </div>
            <div className="flex flex-col items-center">
              <Disc3Icon className="w-12 h-12" />
              <p className="text-gray-700">ツール3</p>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">おすすめの画像生成機能</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>機能</TableHead>
                <TableHead>説明</TableHead>
                <TableHead>価格</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">機能1</TableCell>
                <TableCell>説明1</TableCell>
                <TableCell>無料</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">機能2</TableCell>
                <TableCell>説明2</TableCell>
                <TableCell>有料</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">機能3</TableCell>
                <TableCell>説明3</TableCell>
                <TableCell>有料</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">お問い合わせ</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">名前</Label>
              <Input id="name" placeholder="名前を入力" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" placeholder="メールアドレスを入力" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">メッセージ</Label>
              <Textarea id="message" placeholder="メッセージを入力" className="min-h-[100px]" />
            </div>
            <Button>送信</Button>
          </form>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">特集コンテンツ</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <img
              src="/placeholder.svg"
              alt="Content 1"
              className="w-full"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              alt="Content 2"
              className="w-full"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              alt="Content 3"
              className="w-full"
              width="300"
              height="200"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">作成済み画像</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <img
              src="/placeholder.svg"
              alt="Image 1"
              className="w-full"
              width="200"
              height="200"
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              alt="Image 2"
              className="w-full"
              width="200"
              height="200"
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              alt="Image 3"
              className="w-full"
              width="200"
              height="200"
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
            <img
              src="/placeholder.svg"
              alt="Image 4"
              className="w-full"
              width="200"
              height="200"
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
          </div>
        </section>
      </main>
      <footer className="w-full p-4 bg-gray-800">
        <p className="text-center text-white">© 2023 AI Generator. All rights reserved.</p>
      </footer>
    </div>
  )
}

function Clock1Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 14.5 8" />
    </svg>
  )
}


function Disc3Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </svg>
  )
}


function Link2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  )
}


function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}
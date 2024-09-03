import PromptInput from "@/components/page-ui/home/promptInput"
import Gallery from "@/components/page-ui/home/gallery"
import CanvasComponent from "@/components/page-ui/home/canvas"

import noImage from "@/assets/noImage.png"

export default function Component() {
  const topHeight = "80vh";
  const upperHeight = `calc(${topHeight} * 4 / 7)`;
  const middleHeight = `calc(${topHeight} * 1 / 7)`;
  const lowerHeight = `calc(${topHeight} * 3 / 7)`;

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-neutral-700">
      <section id="top" className="relative flex flex-col items-center justify-end w-full bg-cover bg-center" style={{ height: upperHeight }} >
        <CanvasComponent className="absolute top-0 w-full z-10" style={{ height: topHeight }}>
          <ambientLight />
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <directionalLight position={[-1, -1, -1]} intensity={3} color={0x002288} />
          <mesh>
            <coneGeometry args={[10, 30, 4, 1]} />
            <meshPhongMaterial color={0xffffff} flatShading />
          </mesh>
        </CanvasComponent>
        <div className="z-10 text-center text-white space-y-4 w-3/4 px-4 pb-5">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">AI画像生成の新時代へようこそ</h2>
          <p>AIを活用して、簡単に画像を生成できます。</p>
        </div>
      </section>
      <div className="z-50 sticky top-24 flex justify-center w-full" style={{ height: middleHeight }}>
        <PromptInput />
      </div>
      <div className='w-full' style={{ height:lowerHeight }}></div>
      <section className="py-10 space-y-4 text-center">
        <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-4 rounded-lg shadow-lg">Make Itを使って簡単に画像生成</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-300 overflow-hidden">
            <div className="h-40 bg-gray-200">
              <img src={noImage} alt="機能の説明画像" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">まとめて画像生成</h3>
              <p className="text-gray-700">一度に複数の画像を生成し、時間を節約しましょう。</p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden">
            <div className="h-40 bg-gray-200">
              <img src={noImage} alt="機能の説明画像" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">自由なスタイル変更</h3>
              <p className="text-gray-700">AIを使って、画像のスタイルを自由に変更できます。</p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden">
            <div className="h-40 bg-gray-200">
              <img src={noImage} alt="機能の説明画像" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">カメラアングルの指定</h3>
              <p className="text-gray-700">カメラアングルを指定して、理想の画像を生成しましょう。</p>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
    </div>
  )
}
import { Label } from "@/components/ui/label"
import SelectComponent from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import PromptArea from "@/components/page-ui/generate/pronptarea"

export default function Component() {
    return (
        <div className="flex flex-col md:flex-row">
            <aside className="w-full md:w-1/4 p-4 border-r">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-lg font-bold">一般設定</h2>
                        <div className="mt-2">
                            <Label htmlFor="model">モデル</Label>
                            <SelectComponent
                                id="model"
                                placeholder="モデルを選択"
                                options={[
                                    { value: "animagine-3-0", label: "Animagine 3.0" },
                                    { value: "himawari-mix", label: "HimawariMix" },
                                    { value: "sakura-mix", label: "SakuraMix" },
                                    { value: "momiji-mix", label: "MomijiMix" },
                                    { value: "asagao-mix", label: "AsagaoMix" },
                                    { value: "anzu-mix", label: "AnzuMix" },
                                    { value: "ajisai-mix", label: "AjisaiMix" }
                                ]}
                            />
                        </div>
                        <div className="mt-2">
                            <Label htmlFor="aspect-ratio">縦横比</Label>
                            <SelectComponent
                                id="aspect-ratio"
                                placeholder="縦横比を選択"
                                options={[
                                    { value: "3-4", label: "縦 (3:4)" },
                                    { value: "4-3", label: "横 (4:3)" },
                                    { value: "1-1", label: "正方形 (1:1)" },
                                    { value: "16-9", label: "ワイドスクリーン (16:9)" }
                                ]}
                            />
                        </div>
                    </div>
                <div className="mt-2">
                    <Label htmlFor="camera-angle">カメラアングル</Label>
                    <SelectComponent
                        id="camera-angle"
                        placeholder="カメラアングルを選択"
                        options={[
                            { value: "portrait", label: "人物の顔に焦点" },
                            { value: "facing-viewer", label: "正面から" },
                            { value: "profile", label: "横顔" },
                            { value: "from-side", label: "横から" },
                            { value: "from-behind", label: "後方から" },
                            { value: "pov", label: "主観視点" },
                            { value: "full-body", label: "全身" },
                            { value: "upper-body", label: "体の上半分" },
                            { value: "cowboy-shot", label: "膝上から上" },
                            { value: "feet-out-of-frame", label: "足が画角に入らない（脚ではない）" },
                            { value: "head-out-of-frame", label: "顔が画角に入らない" },
                            { value: "from-above", label: "上から" },
                            { value: "from-below", label: "下から" },
                            { value: "dutch-angle", label: "カメラを傾けて撮影（体も傾く可能性あり）" },
                            { value: "multiple-views", label: "同じキャラが一枚の中に複数" }
                        ]}
                    />
                </div>
                </div>
            </aside>
            <main className="flex-1 p-4">
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/placeholder.svg"
                        alt="Generated Image 1"
                        className="rounded-lg"
                        width="150"
                        height="200"
                        style={{ aspectRatio: "150/200", objectFit: "cover" }}
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Generated Image 2"
                        className="rounded-lg"
                        width="150"
                        height="200"
                        style={{ aspectRatio: "150/200", objectFit: "cover" }}
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Generated Image 3"
                        className="rounded-lg"
                        width="150"
                        height="200"
                        style={{ aspectRatio: "150/200", objectFit: "cover" }}
                    />
                    <img
                        src="/placeholder.svg"
                        alt="Generated Image 4"
                        className="rounded-lg"
                        width="150"
                        height="200"
                        style={{ aspectRatio: "150/200", objectFit: "cover" }}
                    />
                </div>
                <PromptArea />
            </main>
        </div>
    )
}
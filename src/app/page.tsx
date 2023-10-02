export default function Home() {
  return (
    <main className="grid grid-flow-col grid-rows-5 h-screen w-full justify-center">
      <span className="row-span-2 justify-end flex flex-col items-center gap-3">
        <h1 className="font-bold text-6xl">Vítejte!</h1>
        <p className="font-light text-3xl">Vyhledávač maturnitních / ročníkových prací </p>
        <input
          type="text"
          placeholder="Zadejte klíčové slovo, autora či název práce"
          className="input input-bordered w-full max-w-md"/>
      </span>
    </main>
  )
}

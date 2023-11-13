import {ChangeEventHandler} from "react";

interface PropsInterface {
  searchBarChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchBar = (props: PropsInterface) => {
  const {
    searchBarChange
  } = props

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <p className="font-light text-md md:text-4xl">Vyhledávač maturnitních / ročníkových prací </p>
        <input type="search"
               name="search-form"
               id="search-form"
               onChange={searchBarChange}
               placeholder="Zadejte klíčové slovo, autora či název práce"
               className="input input-bordered input-md md:input-lg w-full max-w-md md:max-w-lg"/>
      </div>
    </div>
  )
}
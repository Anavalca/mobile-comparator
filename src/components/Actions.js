import { useState } from "react";

const Actions = ({id, options }) => {
  const { colors, storages } = options;

  const [selectedColor, setSelectedColor] = useState("")
  const [selectedStorage, setSelectedStorage] = useState("")


  return (
    <div className="flex flex-col gap-4">
      <div>
        <p>Color:</p>
        {colors.map(color =>
          <button key={color.name}
            className="bg-white p-2 mr-2 rounded border-2"
            onClick={(e) => setSelectedColor(color.name)}
          >
            {color.name}
          </button>
        )}
      </div>
      <div>
        <p>Almacenamiento:</p>
        {storages.map(storage =>
          <button key={storage.name}
            className="bg-white p-2 mr-2 rounded border-2"
            onClick={(e) => setSelectedStorage(storage.name)}
          >
            {storage.name}
          </button>
        )}
      </div>
    </div>
  )
}

export default Actions;
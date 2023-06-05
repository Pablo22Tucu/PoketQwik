/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  imageVisible?: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, imageVisible = true }: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
    });

    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageLoaded.value && <span>Cargando...</span>}

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="Imagen Pokemon"
          style={{ width: `${size}px` }}
          onLoad$={() => {
            //setTimeout(() => {
            imageLoaded.value = true;
            //}, 500);
          }}
          class={[
            {
              hidden: !imageLoaded.value,
              "brightness-0": imageVisible,
            },
            "transition-all duration-500 ease-in-out",
          ]}
        />
      </div>
    );
  }
);

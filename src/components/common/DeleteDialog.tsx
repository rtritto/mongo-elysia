import { type Component, createSignal } from 'solid-js'

import { DeleteIcon } from '@/components/Icons'

const DeleteDialog: Component<{
  value: string
  entity: string
  tooltipTitle: string
  handleDelete: (input: string) => void
}> = (props) => {
  const [input, setInput] = createSignal('')

  let modalRef: HTMLDialogElement | undefined

  return (
    <>
      <button class="btn btn-error w-full text-xs font-bold text-white" onClick={() => modalRef!.showModal()}>
        <DeleteIcon />

        Delete
      </button>

      <dialog id="my_modal" class="modal" ref={modalRef}>
        <div class="modal-box">
          <label for="my-modal-4" class="btn btn-circle btn-sm absolute right-2 top-2" onClick={() => modalRef!.close()}>✕</label>

          <h3 class="mb-4 text-xl font-bold">
            Delete {props.entity}
          </h3>

          <div class="divider" />

          <div class="mb-4">
            <p>Type <strong>{props.value}</strong> to delete that {props.entity}.</p>

            <input
              type="text"
              class="input input-bordered mt-2 w-full"
              onInput={(event) => setInput(event.target.value)}
              placeholder={props.value}
              value={input()}
              autofocus
            />
          </div>

          <div class="divider" />

          <button
            class="btn btn-error btn-sm mx-1"
            disabled={input() !== props.value}
            onClick={() => {
              setInput('') // Reset value
              props.handleDelete(input())
              modalRef!.close()
            }}
          >
            Delete
          </button>

          <button class="btn btn-primary btn-sm mx-1" onClick={() => modalRef!.close()}>
            Cancel
          </button>
        </div>

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default DeleteDialog
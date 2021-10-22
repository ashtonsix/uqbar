import {useEffect, useRef, useState} from 'react'

import {EditorState, basicSetup} from '@codemirror/basic-setup'
import {EditorView} from '@codemirror/view'

const doc = `if (true) {
  console.log("okay")
} else {
  console.log("oh no")
}
`

const Interface = () => {
  const [code, setCode] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    const v = new EditorView({
      state: EditorState.create({
        doc,
        extensions: [basicSetup],
      }),
      parent: ref.current,
    })

    return () => {
      v.destroy()
    }
  }, [])

  return (
    <>
      <style jsx>{`
        :global(.cm-editor) {
          border: 1px solid silver;
        }
      `}</style>
      <div ref={ref} />
    </>
  )
}

export default Interface

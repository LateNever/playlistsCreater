import { useClipboard } from 'use-clipboard-copy'

function CopyText() {
  const clipboard = useClipboard()
  return (
    <div>
      {/* <input ref={clipboard.target} /> */}
      <h3 ref={clipboard.innerHTML}>Hi</h3>
      {/* console.log({clipboard.target}); */}
      <button onClick={clipboard.copy}>Copy</button>
    </div>
  )
}

export default CopyText

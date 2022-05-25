import "vditor/dist/index.css"
import React from "react"
import Vditor from "vditor"

interface Props {
  starterText: string
}

const Editor: React.FC<Props> = (props: Props) => {
  let starterText = props.starterText
  const [vd, setVd] = React.useState<Vditor>()
  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      lang: 'en_US',
      after: () => {
        vditor.setValue(starterText)
        setVd(vditor)
      }
    })
  }, [])
  return <div id="vditor" className="vditor" />
}

export default Editor;

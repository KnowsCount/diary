import "vditor/dist/index.css";
import React from "react";
import Vditor from "vditor";

const Editor = () => {
  const [vd, setVd] = React.useState<Vditor>()
  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      lang: 'en_US',
      after: () => {
        vditor.setValue("what's happening?");
        setVd(vditor);
      }
    });
  }, []);
  return <div id="vditor" className="vditor" />
}

export default Editor;

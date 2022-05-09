<%*
const editor = this.app.workspace.activeLeaf?.view?.editor;
if(!editor) return;

const linecount = editor.lineCount();
let titles = [];
for(i=0;i<linecount;i++) {  
  if(i%5==0) {
    const line = editor.getLine(i);
	if(!titles.includes(line)) {
	  titles.push(line);
	}
  }
}

const title = await tp.system.suggester(titles, titles,false,"Select book from list");

let output = [];
let page = 0;
let includeLine = false;
let isNote = false;
for(i=0;i<linecount;i++) {
  const line = editor.getLine(i);
  if(i%5 == 0) {
    includeLine = line == title;
  }
  if (includeLine && i%5 == 1) {
    const p = line.match(/(\d+)/);
	if(p && page!=p[0]) {
	  page = p[0];
	  output.push("#### "+page);
	}
	isNote = line.startsWith("- Your Note");
  }
  if (includeLine && i%5 == 3 && line !="" && line !="\n") {
      output.push((isNote ? "" : "> ") + line);
  }
}

window.navigator.clipboard.writeText("# "+title+"\n\n"+output.join("\n\n")+"\n\n");
new Notice ("Extracted kindle highlights are available on the clipboard.",4000);
%>
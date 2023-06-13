import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import './App.css';

function App() {
  let panels:object[]=[
    {'id':'Panel 1',header:'<div>Panel 1</div>',content:'<div>content of panel 1</div>','col':0,'sizeY':2,'minSizeY':1,'maxSizeY':2},
    {'id':'Panel 2',header:'<div>Panel 2</div>',content:'<div>content of panel 2</div>','col':1,'row':0},
    {'id':'Panel 3',header:'<div>Panel 3</div>',content:'<div>content of panel 3</div>','col':2},
    {'id':'Panel 4',header:'<div>Panel 4</div>',content:'<div>content of panel 4</div>','col':1,'row':1,'sizeX':2,'minSizeX':1,'maxSizeX':2}
  ]
  return (
    <div className="App">
      <DashboardLayoutComponent
      panels={panels}
      columns={3}
      allowDragging={false}
      allowResizing={true}>

      </DashboardLayoutComponent>
    </div>
  );
}

export default App;

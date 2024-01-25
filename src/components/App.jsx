import "../css/App.scss";
import 'react-complex-tree/lib/style-modern.css';
import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import { Nav } from "./Nav";


function App() {

    const items = {
        root: {
            index: 'root',
            isFolder: true,
            children: ['child2'],
            data: 'Root item',
        },
        child2: {
            index: 'child2',
            isFolder: true,
            children: ['child3'],
            data: 'com.microplay.example',
        },
        child3: {
            index: 'child3',
            children: [],
            data: 'Child item 3',
        },
    };

    return (
        <div className="flex">
            <Nav />
            <div className="container">
                <div className="topbar">
                    Test Project
                </div>
                <div className="content">
                    <div className="tree">
                        <UncontrolledTreeEnvironment
                            dataProvider={new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))}
                            getItemTitle={item => item.data}
                            viewState={{}}>
                            <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
                        </UncontrolledTreeEnvironment>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
import React, { useState } from "react";

import ReactFlow, {
  removeElements,
  addEdge,
  Background
} from "react-flow-renderer";

const onNodeDragStop = (event, node) => console.log("drag stop", node);
const onElementClick = (event, element) => console.log("click", element);
const onLoad = (reactFlowInstance) => {
  console.log(reactFlowInstance);
  reactFlowInstance.fitView();
};

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Create Purchase Order" },
    position: { x: 5, y: 400 },
    targetPosition: 'left',
    sourcePosition: 'right' 
  },
  { id: "2", data: { label: "Intake" }, position: { x: 200, y: 400 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: "3", data: { label: "Finance Approval" }, position: { x: 400, y: 300 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: "4", data: { label: "Manager Approval" }, position: { x: 400, y: 500 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: "5", data: { label: "Procurement Approval" }, position: { x: 600, y: 400 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: "6", data: { label: "Life goes on 🚀" }, position: { x: 800, y: 400 }, targetPosition: 'left', sourcePosition: 'right' },
  { id: "e1-2", source: "1", target: "2", animated: false, style: { stroke: "#7B62FF", strokeWidth: 3 } },
  { id: "e2-3", source: "2", target: "3", animated: false, style: { stroke: "#7B62FF", strokeWidth: 3 }  },
  { id: "e2-4", source: "2", target: "4", animated: false, style: { stroke: "#7B62FF", strokeWidth: 3 }  },
  { id: "e3-5", source: "3", target: "5", animated: false, style: { stroke: "#7B62FF", strokeWidth: 3 }  },
  { id: "e4-5", source: "4", target: "5", animated: false, style: { stroke: "#7B62FF", strokeWidth: 3 }  },
  { id: "e5-6", source: "5", target: "6", animated: false, style: { stroke: "#7B62FF", strokeWidth: 3 }  }
];

const BasicFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
    >
      <Background />
    </ReactFlow>
  );
};

export default BasicFlow;

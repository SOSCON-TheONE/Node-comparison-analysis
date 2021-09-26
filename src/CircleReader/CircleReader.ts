
// import { readFileSync } from '../../node_modules/@types/node/fs';
import * as vscode from 'vscode';
import { readFileSync, writeFile } from 'fs';
import { Node, ModelOperator, NodeProperties, NodeAttributes, NodeInput, NodeOutput } from './type/types'
import * as flatbuffers from 'flatbuffers';
import { Model } from './circle-analysis/circle/model';
import { BuiltinOptions } from './circle-analysis/circle/builtin-options'
import { caseOptions } from './util/case-options';
import { initBuiltInOperator } from './util/init-builtin-options';
import { initSubgraphNodes } from './util/init-subgraph-nodes';
import { getNodeInputs } from './util/get-node-inputs';
import { getNodeOutputs } from './util/get-node-outputs';

export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

export function decoder(path: string) {
    // const file = readFileSync('./target/inception_v3.circle');
    // const file = readFileSync('./target/sample.circle');
    
    const file = readFileSync(path);
    const buffer = file instanceof Uint8Array ? file : new Uint8Array(file);
    const bb = new flatbuffers.ByteBuffer(buffer);
    const model = Model.getRootAsModel(bb);
    const subgraphsLength = model.subgraphsLength();

    let resultArr: Array<ModelOperator> = [];
    let builtInOperatorArr: Array<String> = initBuiltInOperator(model);


    //init subgraphs
    let subgraph = model.subgraphs(0);

    if (subgraph != null) {
        for (let subgraphIdx = 0; subgraphIdx < subgraphsLength; subgraphIdx++) {
            //indirect bb_pos to next subgraph index
            model.subgraphs(subgraphIdx, subgraph);

            let nodesArr: Array<Node> = initSubgraphNodes(subgraph); // init node array

            //operator에서 나오는 inputs와 outputs는 tensor의 location을 의미한다.
            for (let operatorIdx = 0; operatorIdx < subgraph.operatorsLength(); operatorIdx++) {
                let operator = subgraph.operators(operatorIdx)!;
                let modelType = builtInOperatorArr[operator.opcodeIndex()];
                let modelLocation = operatorIdx;
                let modelProp: NodeProperties = { type: modelType, location: modelLocation };

                //get node attribute
                let option = BuiltinOptions[operator.builtinOptionsType()];
                let modelAttribute: Array<NodeAttributes> = [];

                caseOptions(option, operator, modelAttribute);

                //get node inputs
                let nodeInputs: Array<NodeInput> = getNodeInputs(operator, nodesArr);
                //get node outputs
                let nodeOutputs: Array<NodeOutput> = getNodeOutputs(operator, nodesArr);
                //get builtin-option of node
                let builtinoptions = BuiltinOptions[operator.builtinOptionsType()];

                let modelOper: ModelOperator = {
                    builtinoptions: builtinoptions,
                    properties: modelProp,
                    attributes: modelAttribute,
                    inputs: nodeInputs,
                    outputs: nodeOutputs
                };

                resultArr.push(modelOper);
            }
        }
    }
    let jsondata = JSON.stringify(resultArr);
    return jsondata;
};
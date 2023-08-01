export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
}

export type Problem = {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  order: number;
  starterCode: string;
  // Error: Error serializing `.problem.handlerFunction` returned from `getStaticProps` in "/problems/[pid]".
  // Reason: `function` cannot be serialized as JSON. Please only return JSON serializable data types.
  handlerFunction: ((fn: any) => boolean) | string;
  starterFunctionName: string;
}


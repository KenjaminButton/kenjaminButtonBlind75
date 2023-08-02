import React from 'react';
import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';


type ProblemPageProps = {
  problem: Problem
};

const ProblemPage:React.FC<ProblemPageProps> = ({problem}) => {
  // console.log("problem:::", problem)
  return (
    <div>
      <Topbar problemPage />
      <Workspace problem={problem} />
    </div>
  )
}
export default ProblemPage;

// Fetch local data with static site generation (SSG)
// getStaticPaths => create dynamic routes pre-generated on the server
export async function getStaticPaths() {
  const paths = Object.keys(problems).map( (key) => ({
    params:{pid:key}
  }))
  return {
    paths,
    fallback: false
  }
}

// getStaticProps => Fetches the data
// Functions cannot be serialized as JSON
export async function getStaticProps({params}:{params:{pid:string}}) {
  const {pid} = params
  const problem = problems[pid]

  if (!problem) {
    return {
      notFound: true
    }
  }
  // Error: Error serializing `.problem.handlerFunction` returned from `getStaticProps` in "/problems/[pid]".
  // Reason: `function` cannot be serialized as JSON. Please only return JSON serializable data types.
  problem.handlerFunction = problem.handlerFunction.toString()
  return {
    props: {
      problem
    }
  }
}
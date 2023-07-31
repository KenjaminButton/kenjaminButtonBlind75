import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';


type PlaygroundProps = {
  
};

const Playground:React.FC<PlaygroundProps> = () => {
  
  return (
    <div className='flex flex-col bg-dark-layer-1 relative'>
      <PreferenceNav />
      <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
        <div className="w-full overflow-auto">
          <CodeMirror 
            value='const kenjamin = good job buddy!'
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{fontSize:16}}
          />
        </div>
        <div className='w-full px-5 overflow-auto'>
          <div className="flex- h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className='text-sm font-medium leading-5 text-white'>Test Cases</div>
              <hr className='absolute bottom-0 h-0.5 w-20 rounded-full border-none bg-white'/>

            </div>
          </div>
        </div>
      </Split>
    </div>
  )
}
export default Playground;
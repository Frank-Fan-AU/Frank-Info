import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  children: string;
}

interface TableProps {
  children?: ReactNode;
  [key: string]: unknown;
}

const Table = ({ children, ...props }: TableProps) => (
  <div className='overflow-x-auto'>
    <table className='w-full border-collapse border border-neutral-200 dark:border-neutral-700' {...props}>
      {children}
    </table>
  </div>
);

const MDXComponent = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: (props) => (
          <a
            className='cursor-pointer text-teal-500 hover:text-teal-400 hover:underline'
            {...props}
          />
        ),
        p: (props) => <div className='mb-4' {...props} />,
        h1: (props) => (
          <h1
            className='mb-4 text-2xl font-medium dark:text-neutral-300'
            {...props}
          />
        ),
        h2: (props) => (
          <h2
            className='mb-4 text-xl font-medium dark:text-neutral-300'
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className='mb-4 pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300'
            {...props}
          />
        ),
        ul: (props) => (
          <ul className='mb-4 list-disc space-y-3 pb-2 pl-10' {...props} />
        ),
        ol: (props) => (
          <ol className='mb-4 list-decimal space-y-3 pb-2 pl-10' {...props} />
        ),
        code: (props) => {
          const { className, children } = props;
          const match = /language-(\w+)/.exec(className || '');
          const isInline = !match && !className?.includes('language-');
          return (
            <CodeBlock
              inline={isInline}
              className={className}
              {...props}
            >
              {String(children)}
            </CodeBlock>
          );
        },
        blockquote: (props) => (
          <blockquote
            className='mb-4 rounded-br-2xl border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-200 py-3 pl-6 text-lg font-medium text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200'
            {...props}
          />
        ),
        table: (props) => <Table {...props} />,
        th: (props) => (
          <th className='border border-neutral-200 px-3 py-1 text-left dark:border-neutral-700'>
            {props.children}
          </th>
        ),
        td: (props) => (
          <td className='border border-neutral-200 px-3 py-1 dark:border-neutral-700'>
            {props.children}
          </td>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MDXComponent;

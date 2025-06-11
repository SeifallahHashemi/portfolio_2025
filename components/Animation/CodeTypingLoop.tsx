'use client';

import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fullCode = `
import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

// comment

class Expire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: props.children }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                component: null
            });
        }, this.props.time || this.props.seconds * 1000);
    }
    render() {
        return this.state.component;
    }
}

export default uniquePropHOC(["time", "seconds"])(Expire);
`;

export default function CodeTypingLoop() {
  const [code, setCode] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const delay = isDeleting ? 5 : 15;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullCode.length) {
        setCode((prev) => prev + fullCode[index]);
        setIndex((prev) => prev + 1);
      } else if (!isDeleting && index === fullCode.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index > 0) {
        setCode((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (isDeleting && index === 0) {
        // Pause before retyping
        setIsDeleting(false);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div
      dir={'ltr'}
      style={{
        direction: 'ltr',
      }}
      className={
        'min-w-1/2 w-fit rounded-xl bg-[rgb(17,27,39)] min-h-96 overflow-clip mx-auto my-10'
      }
    >
      <SyntaxHighlighter
        language="javascript"
        style={coldarkDark}
        wrapLines
        showLineNumbers={true}
      >
        {code || ' '}
      </SyntaxHighlighter>
    </div>
  );
}

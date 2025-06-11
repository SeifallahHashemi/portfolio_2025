'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fullCode = `
import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

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
  const indexRef = useRef(0);
  const deletingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const animate = () => {
    const index = indexRef.current;
    const isDeleting = deletingRef.current;

    if (!isDeleting && index < fullCode.length) {
      setCode((prev) => prev + fullCode[index]);
      indexRef.current += 1;
    } else if (!isDeleting && index === fullCode.length) {
      // Pause before deleting
      deletingRef.current = true;
      setTimeout(() => {
        rafRef.current = requestAnimationFrame(animate);
      }, 1000);
      return;
    } else if (isDeleting && index > 0) {
      setCode((prev) => prev.slice(0, -1));
      indexRef.current -= 1;
    } else if (isDeleting && index === 0) {
      // Pause before retyping
      deletingRef.current = false;
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      dir="ltr"
      className="min-w-1/2 w-fit rounded-xl bg-[rgb(17,27,39)] min-h-96 overflow-clip mx-auto my-10"
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

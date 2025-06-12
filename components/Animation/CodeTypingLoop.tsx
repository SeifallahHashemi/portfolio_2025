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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const animate = () => {
    const index = indexRef.current;
    const isDeleting = deletingRef.current;

    if (!isDeleting && index < fullCode.length) {
      setCode((prev) => prev + fullCode[index]);
      indexRef.current += 1;
      timeoutRef.current = setTimeout(animate, 60); //  سرعت تایپ
    } else if (!isDeleting && index === fullCode.length) {
      deletingRef.current = true;
      timeoutRef.current = setTimeout(animate, 5000); //  تأخیر 2 ثانیه‌ای قبل از حذف
    } else if (isDeleting && index > 0) {
      setCode((prev) => prev.slice(0, -1));
      indexRef.current -= 1;
      timeoutRef.current = setTimeout(animate, 40); //  سرعت حذف
    } else if (isDeleting && index === 0) {
      deletingRef.current = false;
      timeoutRef.current = setTimeout(animate, 2000); //  تأخیر قبل از شروع دوباره تایپ
    }
  };

  useEffect(() => {
    animate();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      dir="ltr"
      className="w-[40rem] rounded-xl bg-[rgb(17,27,39)] min-h-96 overflow-x-auto mx-auto my-10"
    >
      <SyntaxHighlighter
        language="javascript"
        style={coldarkDark}
        wrapLines
        showLineNumbers={true}
        wrapLongLines={true}
      >
        {code || ' '}
      </SyntaxHighlighter>
    </div>
  );
}

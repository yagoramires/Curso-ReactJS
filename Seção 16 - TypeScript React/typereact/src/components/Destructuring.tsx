import React from 'react';

type Props = {
  title: string;
  content: string;
  commentsQnt: number;
  tags: string[];
};

const Destructuring = ({ title, content, commentsQnt, tags }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{commentsQnt}</p>
      <div>
        {tags.map((tag, i) => (
          <p key={i}>#{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Destructuring;

import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { connect } from 'react-redux';
import './TextEditor.css';

import 'codemirror/mode/jsx/jsx';

import 'codemirror/mode/javascript/javascript';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const options = {
  // mode: 'javascript',
  theme: 'material',

  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  mode: 'jsx',
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  styleActiveLine: true,
  viewportMargin: 99,
};

function TextEditor({ text }) {
  const [value, setValue] = useState(text);

  return (
    <div className='text-editor' id='text-editor'>
      <CodeMirror
        value={value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        onChange={(editor, data, value) => {
          setValue(value);
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  text: state.text.text,
});

export default connect(mapStateToProps, {})(TextEditor);

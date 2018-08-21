'use strict';

const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
const { __ } = wp.i18n;

registerBlockType('snow-monkey-awesome-custom-blocks/faq--item', {
  title: __('FAQ item', 'snow-monkey-awesome-custom-blocks'),
  icon: 'businessman',
  category: 'smacb',
  parent: [ 'snow-monkey-awesome-custom-blocks/faq' ],
  attributes: {
    question: {
      type: 'array',
      source: 'children',
      selector: '.smacb-faq__item__question',
      default: [ __('Question', 'snow-monkey-awesome-custom-blocks') ]
    }
  },

  edit({ attributes, setAttributes, isSelected }) {
    const { question, answer } = attributes;

    return (
      <div className="smacb-faq__item">
        <RichText
          className="smacb-faq__item__question"
          value={ question }
          formattingControls={ [] }
          multiline={ false }
          onChange={ value => setAttributes({ question: question}) }
        />

        <div className="smacb-faq__item__answer">
          <InnerBlocks />
        </div>
      </div>
    );
  },

  save({ attributes }) {
    const { question } = attributes;

    return (
      <div className="smacb-faq__item">
        <div className="smacb-faq__item__question">
          { question }
        </div>
        <div className="smacb-faq__item__answer">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
} );

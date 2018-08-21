'use strict';

import './item.js';

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { __ } = wp.i18n;

registerBlockType('snow-monkey-awesome-custom-blocks/faq', {
  title: __('FAQ', 'snow-monkey-awesome-custom-blocks'),
  icon: 'businessman',
  category: 'smacb',
  attributes: {
  },

  edit({ attributes, setAttributes, isSelected }) {
    return (
      <div className="smacb-faq">
        <div className="smacb-faq__body">
          <InnerBlocks
            allowedBlocks={ [ 'snow-monkey-awesome-custom-blocks/faq--item', 'core/paragraph' ] }
          />
        </div>
      </div>
    );
  },

  save({ attributes }) {
    return (
      <div className="smacb-faq">
        <div className="smacb-faq__body">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
} );

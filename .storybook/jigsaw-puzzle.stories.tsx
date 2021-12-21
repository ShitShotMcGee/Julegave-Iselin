import { Meta, Story } from '@storybook/react'
import React from 'react'
import { JigsawPuzzle } from '../src'
import '../src/jigsaw-puzzle.css'
import './jigsaw-puzzle.css'

export default {
  component: JigsawPuzzle,
  title: 'JigsawPuzzle',
  argTypes: {
    imageSrc: {
      defaultValue: 'https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,h_396,q_75,w_704/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DSolstrand_666039210.jpg%26dh%3D533%26dw%3D800%26t%3D4',
      description: 'Source of the image. Can be any URL or relative path.'
    },
    rows: {
      defaultValue: 3,
      description: 'The amount of rows the puzzle will have.'
    },
    columns: {
      defaultValue: 4,
      description: 'The amount of columns the puzzle with have.'
    },
    onSolved: {
      description: 'Called when the puzzle is solved.'
    }
  }
} as Meta

const Template: Story<Parameters<typeof JigsawPuzzle>[0]> = props => <JigsawPuzzle {...props} onSolved={() => alert('Solved!')}/>

export const Puzzle = Template.bind({})

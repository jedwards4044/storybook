import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from '../../components/Carousel'

export default {
  title: 'Modules/Carousel',
  component: Carousel
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />

const Default = Template.bind({})
Default.args = {
  autoPlay: true,
    items: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-010.jpg',
      byline: '-Rupert Tolson',
    },
    {
      text: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-001.jpg',
      byline: '-Jeff Grover',
    },
    {
      text: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-002.jpg',
      byline: '-Mark Ilten',
    },
    {
      text: ' proident, sunt in culpa qui officia deserunt mollit anim id est laborum. proident, sunt in culpa qui officia deserunt mollit anim id est laborum.proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-005.jpg',
      byline: '-Sarah Patterson',
    },
  ]
}

export const Text = Template.bind({})
Text.args = {
  ...Default.args,
  modLayout: 'text',
  slideCount: 3,
}

export const CleanSingleImage = Template.bind({})
CleanSingleImage.args = {
  ...Default.args,
  modLayout: 'images',
  slideCount: 1,
  items: [
    {
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-010.jpg',
    },
    {
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-001.jpg',
    },
    {
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-002.jpg',
    },
    {
      imageUrl: 'https://townsquareinteractive.s3.amazonaws.com/travel365.com/preview/assets/juan-test-005.jpg',
    },
  ]
}

export const SingleImage = Template.bind({})
SingleImage.args = {
  ...Default.args,
  modLayout: 'images',
  slideCount: 1,
}

export const _2Images = Template.bind({})
_2Images.args = {
  ...Default.args,
  modLayout: 'images',
  slideCount: 2,
}

export const _3Images = Template.bind({})
_3Images.args = {
  ...Default.args,
  modLayout: 'images',
  slideCount: 3,
}


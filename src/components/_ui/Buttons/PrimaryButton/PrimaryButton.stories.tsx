import type { StoryObj } from "@storybook/react";
import PrimaryButton from ".";
import { fn } from "@storybook/test";
import { ElementType } from "react";


const meta = {
    title: 'components/Buttons/Primary button',
    component: PrimaryButton,
    decorators: [
        (Story:ElementType) => (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:"5rem"}}>
            <Story />
          </div>
        ),
      ],
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
    args: {},
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: { 
      width:"25%",
      height:"",
      children:"test",
      callback: fn(),
    }
  };
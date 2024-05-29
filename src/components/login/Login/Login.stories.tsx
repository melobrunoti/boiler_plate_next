import type { StoryObj } from "@storybook/react";
import Login from ".";
import { ElementType } from "react";


const meta = {
    title: 'pages/Login',
    component: Login,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
    decorator: [
        (Story:ElementType) => (
              <Story />
        ),
    ],
    tags: ['autodocs'],
    args: {},
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: { 
    }
  };
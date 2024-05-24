import type { Meta, StoryObj } from "@storybook/react";
import LogoutModal from ".";
import { fn } from "@storybook/test";


const meta = {
    title: 'Logout Modal ',
    component: LogoutModal,
  
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
      open: true,
      handleClose : fn() ,
      callback : fn() ,
    }
  };
  
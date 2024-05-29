import { StoryObj } from "@storybook/react";
import HomeBanksTable from ".";
import { ReactQueryProvider }  from "../../../providers/query-client/ReactQueryProvider"
import { ElementType } from "react";

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const meta = {
    title: 'pages/HomeBanksTable',
    component: HomeBanksTable,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
    decorator: [
        (Story:ElementType) => (
          <ReactQueryProvider>
            <Story />
          </ReactQueryProvider>
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
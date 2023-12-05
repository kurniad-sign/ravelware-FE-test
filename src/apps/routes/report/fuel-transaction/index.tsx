import { Breadcrumb } from 'antd';

export default function FuelTransactionRoute() {
  return (
    <>
      <div>
        <Breadcrumb
          items={[
            {
              title: 'Report',
            },

            {
              title: 'Fuel Transaction History',
            },
          ]}
        />
      </div>
    </>
  );
}

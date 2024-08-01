import MenuChip from '../components/MenuChip';
import TopBar from '../components/TopBar';

function Home() {
  return (
    <div className="ring-4 ring-bgSecondary p-10 rounded-xl">
      <TopBar />
      <div className="pt-6">
        <h2 className="text-textPrimary font-bold text-2xl"> Daily Entry </h2>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-40 xl:grid-cols-3 gap-10">
          <MenuChip
            route="/form-1"
            title="Invoice"
            description="Adding or managing new invoice"
          />
          <MenuChip
            route="/invoice"
            title="Items Bought"
            description="Adding or managing items bought"
          />
          <MenuChip
            route="/customers"
            title="Deposit Cylinder"
            description="Adding or managing deposit cylinder"
          />
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-textPrimary font-bold text-2xl"> Manage </h2>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-40 xl:grid-cols-3 gap-10">
          <MenuChip
            route="/form-1"
            title="Products"
            description="Manage your products"
          />
          <MenuChip
            route="/customers"
            title="Customers"
            description="Manage your customers"
          />
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-textPrimary font-bold text-2xl">
          Statement Generations
        </h2>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-40 xl:grid-cols-3 gap-10">
          <MenuChip
            route="/form-1"
            title="Generate Statement"
            description="Generates statement for credit based customers"
          />
          <MenuChip
            route="/customers"
            title="Generate Sales Report"
            description="Generate Report for sales and other missalanious expenses"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import Header from './Components/header/header';
import PricingPlan from './Components/pricingPlan/pricingPlan';
import React from 'react';

function App() {
    const [planSelected, setPlanSelected] = React.useState(['None', '0$']);

    function onDataTake(data) {
        setPlanSelected(data);
    }

    return (
        <div className="App">
            <Header plan={planSelected}></Header>
            <PricingPlan onData={onDataTake}></PricingPlan>
        </div>
    );
}

export default App;

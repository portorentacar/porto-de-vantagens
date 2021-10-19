import {Switch} from 'react-router-dom';
import React from 'react';
import RouteWrapper from './Route';
import Home from '../pages/Home/Home';
import ContactPage from '../pages/Contact/Contact';
import CompanyPage from '../pages/CompanyPage/CompanyPage';
import SearchCupom from '../pages/SearchCupom/SearchCupom';
import ValidadeCupom from '../pages/ValidadeCupom/ValidadeCupom';
import SignIn from '../pages/SignIn/SignIn';
import Companies from '../pages/Companies/Companies';
import RegulationPage from '../pages/RegulationPage/RegulationPage';
import UploadImage from '../pages/UploadImage/UploadImage';
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import CompanyPageAdmin from '../pages/Admin/CompaniesPageAdmin/CompaniesPageAdmin';
import NewCompany from '../pages/Admin/NewCompany/NewCompany';
import CuponsPageAdmin from '../pages/Admin/CuponsPageAdmin/CuponsPageAdmin';
import NewCupom from '../pages/Admin/NewCupom/NewCupom';
import SignUp from '../pages/Admin/SignUp/SignUp';
import UsersAdmin from '../pages/Admin/UsersAdmin/UsersAdmin';
import TermsOfUsePage from '../pages/TermsOfUsePage/TermsOfUsePage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage/PrivacyPolicyPage'
import CompaniesEdit from '../pages/Admin/CompaniesEdit/CompaniesEdit';
import CuponsEdit from '../pages/Admin/CuponsEdit/CuponsEdit';
import EditUser from '../pages/Admin/EditUser/EditUser';
import Tourism from '../pages/Tourism/Tourism';
 
function Routes() {
    return (
        <Switch>
            <RouteWrapper exact path="/" component={Home} />
            <RouteWrapper exact path="/contato" component={ContactPage} />
            <RouteWrapper exact path="/parceiros" component={CompanyPage} />
            <RouteWrapper exact path="/buscar-cupom" component={SearchCupom} />
            <RouteWrapper exact path="/validar-cupom" component={ValidadeCupom} />
            <RouteWrapper exact path="/entrar" component={SignIn} />
            <RouteWrapper exact path="/onde-usar" component={Companies} />
            <RouteWrapper exact path="/regulamento" component={RegulationPage} />
            <RouteWrapper exact path="/new" component={UploadImage} />
            <RouteWrapper exact path="/termos-de-uso" component={TermsOfUsePage} />
            <RouteWrapper exact path="/politica-de-privacidade" component={PrivacyPolicyPage} />
            <RouteWrapper exact path="/turismo" component={Tourism} />

            
            <RouteWrapper exact path="/admin/painel" component={Dashboard} isPrivate />
            <RouteWrapper exact path="/admin/parceiros" component={CompanyPageAdmin} isPrivate/>
            <RouteWrapper exact path="/admin/novoparceiro" component={NewCompany} isPrivate/>
            <RouteWrapper exact path="/admin/editparceiro/:id" component={CompaniesEdit} isPrivate/>
            <RouteWrapper exact path="/admin/cupons" component={CuponsPageAdmin} isPrivate/>
            <RouteWrapper exact path="/admin/novocupom" component={NewCupom} isPrivate/>
            <RouteWrapper exact path="/admin/editcupom/:id" component={CuponsEdit} isPrivate/>
            <RouteWrapper exact path="/admin/usuarios" component={UsersAdmin} isPrivate/>
            <RouteWrapper exact path="/admin/usuarios/:id" component={EditUser} isPrivate/>
            <RouteWrapper exact path="/admin/cadastro" component={SignUp} isPrivate/>

        </Switch>
    )
}

export default Routes;

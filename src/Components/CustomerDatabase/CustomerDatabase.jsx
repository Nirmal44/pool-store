import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '../Layouts/Container';

const CustomerDatabase = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        !user && navigate('/login')
    }, [])

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            {user &&
                <Container>
                    <div className="nk-content mt-5 ">
                             <div className="container-fluid">
                                <div className="nk-content-inner">
                                    <div className="nk-content-body">
                                        
                                    <div className="nk-block-head nk-block-head-sm mt-3">
                                        <div className="nk-block-between">
                                            <div className="nk-block-head-content">
                                                <h4 className="nk-block-title page-title">The Pool Store / 
                                                  <span> Customer Database</span>
                                                </h4>
                                            </div>{/* .nk-block-head-content */}
                                            <div className="d-flex">
                                                 <div className="drodown mr-3">
                                                    <a href="#" className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white exportDrop" data-bs-toggle="dropdown">Export </a>
                                                     <div className="dropdown-menu dropdown-menu-end">
                                                        <ul className="link-list-opt no-bdr">
                                                            <li><a href="#"><span>On Hold</span></a></li>
                                                            <li><a href="#"><span>Delivered</span></a></li>
                                                            <li><a href="#"><span>Rejected</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <a className="btn btn-primary d-md-inline-flex fRight" href=''>Add Customer</a>
                                            </div>  
                                      </div>{/* .nk-block-between */}
                                  </div>{/* .nk-block-head */}


                                    <div className="nk-block">
                                        <div className="row g-gs">
                                           <div className="col-md-6">
                                              <div className="circleChartFlex">
                                                  <div className="">
                                                     <span>100% of your customer database</span>
                                                     <h6>Showing all 150 users</h6>
                                                  </div>
                                                  <div className="d-flex">
                                                <a href="" className="thiryday">30 Days</a>
                                                  <div class="drodown">
                                                     <a href="#" class="dropdown-toggle btn btn-outline-light btn-white filterBnt" data-bs-toggle="dropdown" aria-expanded="false">Filter 
                                                     <em class="icon ni ni-filter-alt"></em></a>
                                                      <div class="dropdown-menu dropdown-menu-end">
                                                        <ul class="link-list-opt no-bdr">
                                                            <li><a href="#"><span>- Price Low to high</span></a></li>
                                                            <li><a href="#"><span>- Price High to Low</span></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                  </div> 
                                              </div>     
                                           </div>
                                           <div className="col-md-6">
                                               <div className="form-control-wrap searchBarTable">
                                                <div className="form-icon form-icon-right">
                                                     <em className="icon ni ni-search"></em></div>
                                                     <input type="text" className="form-control" id="fv-email" name="fv-email" placeholder='Search Here...'/>
                                                </div>
                                           </div>

                                        </div>{/* .row */}
                                    </div>



                                    <div className="card card-preview">
                                                  <table className="table table-orders mt-3">
                                                     <thead className="tb-odr-head dashboardTableHead">
                                                        <tr className="tb-odr-item">
                                                            <th className="tb-odr-info"><span className="tb-odr-id">User name</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-total">E-mail subscription </span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Location</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Orders</span></th>
                                                            
                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Amount spent</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tb-odr-body whatSnewTable">
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info">Janet Aria</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Subscribed</span>
                                                            </td>
                                                            <td className="tb-odr-info">Robins IA, United States </td>
                                                            <td className="tb-odr-info">0 orders</td>
                                                            <td className="tb-odr-info">12 Aug 2022 - 12:25 am</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info">Janet Aria</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-secondary">Not Subscribed</span>
                                                            </td>
                                                            <td className="tb-odr-info">Robins IA, United States </td>
                                                            <td className="tb-odr-info">0 orders</td>
                                                            <td className="tb-odr-info">12 Aug 2022 - 12:25 am</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info">Janet Aria</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Subscribed</span>
                                                            </td>
                                                            <td className="tb-odr-info">Robins IA, United States </td>
                                                            <td className="tb-odr-info">0 orders</td>
                                                            <td className="tb-odr-info">12 Aug 2022 - 12:25 am</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info">Janet Aria</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-secondary">Not Subscribed</span>
                                                            </td>
                                                            <td className="tb-odr-info">Robins IA, United States </td>
                                                            <td className="tb-odr-info">0 orders</td>
                                                            <td className="tb-odr-info">12 Aug 2022 - 12:25 am</td>
                                                        </tr>
                                                   </tbody>
                                                </table>
                                            </div>






                            </div>
                        </div>
                    </div>  
                </div> 

                </Container>
            }
        </>
    );
}

export default CustomerDatabase;

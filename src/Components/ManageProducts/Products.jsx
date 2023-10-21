import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '../Layouts/Container';
import moment from 'moment-timezone';
import { productListAPI } from '../../API/manageProducts';

const Products = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.authReducer.authData)
    const authToken = useSelector((state) => state.authReducer.token)
    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [productData, setProductData] = useState([])

    const fetchProductData = async () => {
        setSpinnerLoading(true)
        const config = {
            headers: { Authorization: `Bearer ${authToken}` }
        }
        await productListAPI(config)
            .then((response) => {
                console.log("🚀 ~ file: Products.jsx:25 ~ .then ~ response:", response)
                setProductData(response ? response.data ? response.data.data.products : [] : [])
            }).catch((err) => {
                console.log("🚀 ~ file: Profile.jsx:80 ~ err:", err)
            })
        setSpinnerLoading(false)
    }

    useEffect(() => {
        !user && navigate('/login')
        fetchProductData()
    }, []);

    return (
        <>

            {user &&
                <Container>
                    <Toaster position="top-right" reverseOrder={false} />
                    {spinnerLoading
                        ? <div className='vh-100 flex justify-center items-center'>
                            <Oval
                                height="100"
                                width="100"
                                color='var(--ps-main)'
                                secondaryColor="var(--ps-main)"
                                ariaLabel='oval-loading'
                                strokeWidth={4}
                                strokeWidthSecondary={4}
                                visible={true}
                            />
                        </div>
                        : <div className="nk-content mt-5 ">
                            <div className="container-fluid">
                                <div className="nk-content-inner">
                                    <div className="nk-content-body">
                                        
                                    <div className="nk-block-head nk-block-head-sm mt-3">
                                        <div className="nk-block-between">
                                            <div className="nk-block-head-content">
                                                <h4 className="nk-block-title page-title">The Pool Store / 
                                                  <span>Manage produts</span>
                                                </h4>
                                            </div>{/* .nk-block-head-content */}
                                            <div className="d-flex">
                                                 <div className="drodown">
                                                    <a href="#" className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white exportDrop" data-bs-toggle="dropdown">Export </a>
                                                     <div className="dropdown-menu dropdown-menu-end">
                                                        <ul className="link-list-opt no-bdr">
                                                            <li><a href="#"><span>On Hold</span></a></li>
                                                            <li><a href="#"><span>Delivered</span></a></li>
                                                            <li><a href="#"><span>Rejected</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>  


                                        </div>{/* .nk-block-between */}
                                    </div>{/* .nk-block-head */}

                                    <div className="nk-block">
                                        <div className="row g-gs">
                                           <div className="col-md-6">
                                              <div className="circleChartFlex">
                                                  <div className="">
                                                     <span>Users summary</span>
                                                     <h6>Showing all 150 products</h6>
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



                                    <div className="nk-block">
                                        <div className="row g-gs">
                                             <div className="col-md-9">
                                                <ul class="nav nav-tabs mt-n3 brBtmNone" role="tablist">
                                                    <li class="nav-item" role="presentation"><a class="nav-link active" data-bs-toggle="tab" href="#tabItem1" aria-selected="true" role="tab">All <span className="tableTabsSpan"> 04</span></a></li>
                                                    <li class="nav-item" role="presentation"><a class="nav-link" data-bs-toggle="tab" href="#tabItem2" aria-selected="false" role="tab" tabindex="-1">Active <span className="tableTabsSpan"> 36</span></a></li>
                                                    <li class="nav-item" role="presentation"><a class="nav-link" data-bs-toggle="tab" href="#tabItem3" aria-selected="false" role="tab" tabindex="-1">Draft <span className="tableTabsSpan"> 10</span></a></li>
                                                    <li class="nav-item" role="presentation"><a class="nav-link" data-bs-toggle="tab" href="#tabItem4" aria-selected="false" role="tab" tabindex="-1">Archived <span className="tableTabsSpan"> 24</span></a></li>
                                                    <li class="nav-item" role="presentation"><a class="nav-link" data-bs-toggle="tab" href="#tabItem5" aria-selected="false" role="tab" tabindex="-1">Add Filter 
                                                    <em class="icon ni ni-plus-round-fill tableTabsSpan"></em></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
											<a href="#" className="btn btn-primary lightBlue d-md-inline-flex fRight">Add New Product</a>
										</div>
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="tab-content">
                                        <div className="tab-pane active show" id="tabItem1" role="tabpanel">
                                            <div className="card card-preview">
                                                  <table className="table table-orders mt-3">
                                                     <thead className="tb-odr-head dashboardTableHead">
                                                        <tr className="tb-odr-item">
                                                            <th className="tb-odr-info"><span className="tb-odr-id">Product ID</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-total">Product name </span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Vendor</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Status</span></th>
                                                            
                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Inventory</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tb-odr-body whatSnewTable">
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Regal 25 pound Chlorinated tablets</td>
                                                            <td className="tb-odr-info">Pool chemical</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-info ">Draft</span>
                                                            </td>
                                                            <td className="tb-odr-info">40 in Stock</td>
                                                        </tr>
                                                   </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tabItem2" role="tabpanel">
                                            <div className="card card-preview">
                                                  <table className="table table-orders mt-3">
                                                     <thead className="tb-odr-head dashboardTableHead">
                                                        <tr className="tb-odr-item">
                                                            <th className="tb-odr-info"><span className="tb-odr-id">Product ID</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-total">Product name </span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Vendor</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Status</span></th>
                                                            
                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Inventory</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tb-odr-body whatSnewTable">
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                       
                                                   </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tabItem3" role="tabpanel">
                                            <div className="card card-preview">
                                                  <table className="table table-orders mt-3">
                                                     <thead className="tb-odr-head dashboardTableHead">
                                                        <tr className="tb-odr-item">
                                                            <th className="tb-odr-info"><span className="tb-odr-id">Product ID</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-total">Product name </span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Vendor</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Status</span></th>
                                                            
                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Inventory</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tb-odr-body whatSnewTable">
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                       
                                                   </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="tab-pane" id="tabItem4" role="tabpanel">
                                            <div className="card card-preview">
                                                  <table className="table table-orders mt-3">
                                                     <thead className="tb-odr-head dashboardTableHead">
                                                        <tr className="tb-odr-item">
                                                            <th className="tb-odr-info"><span className="tb-odr-id">Product ID</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-total">Product name </span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Vendor</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Status</span></th>
                                                            
                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Inventory</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tb-odr-body whatSnewTable">
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                   </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="tab-pane" id="tabItem5" role="tabpanel">
                                            <div className="card card-preview">
                                                  <table className="table table-orders mt-3">
                                                     <thead className="tb-odr-head dashboardTableHead">
                                                        <tr className="tb-odr-item">
                                                            <th className="tb-odr-info"><span className="tb-odr-id">Product ID</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-total">Product name </span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Vendor</span></th>

                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Status</span></th>
                                                            
                                                            <th className="tb-odr-amount"><span className="tb-odr-status">Inventory</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="tb-odr-body whatSnewTable">
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                        <tr className="tb-odr-item">
                                                            <td className="tb-odr-info"><em class="icon ni ni-copy"></em> #TPS0965</td>
                                                            <td className="tb-odr-info">Poolife Algaecide</td>
                                                            <td className="tb-odr-info">ThePoolStoreValdosta</td>
                                                            <td className="tb-odr-info">
                                                                <span class="badge rounded-pill badge-dim bg-outline-success">Active</span>
                                                            </td>
                                                            <td className="tb-odr-info">245 in Stock</td>
                                                        </tr>
                                                   </tbody>
                                                </table>
                                            </div>
                                        </div>









                                    </div>
                                </div>





                                        <div className="nk-block">
                                            {/* Paginaion */}
                                            <div className="card">
                                                <div className="card-inner">
                                                    <div className="nk-block-between-md g-3">
                                                        <div className="g">
                                                            <ul className="pagination justify-content-center justify-content-md-start">
                                                                <li className="page-item"><a className="page-link" href="#"><em className="icon ni ni-chevrons-left" /></a></li>
                                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                <li className="page-item"><span className="page-link"><em className="icon ni ni-more-h" /></span></li>
                                                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                                                <li className="page-item"><a className="page-link" href="#">7</a></li>
                                                                <li className="page-item"><a className="page-link" href="#"><em className="icon ni ni-chevrons-right" /></a></li>
                                                            </ul>{/* .pagination */}
                                                        </div>
                                                        <div className="g">
                                                            <div className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                                                <div>Page</div>
                                                                <div>
                                                                    <select className="form-select js-select2" data-search="on" data-dropdown="xs center">
                                                                        <option value="page-1">1</option>
                                                                        <option value="page-2">2</option>
                                                                        <option value="page-4">4</option>
                                                                        <option value="page-5">5</option>
                                                                        <option value="page-6">6</option>
                                                                        <option value="page-7">7</option>
                                                                        <option value="page-8">8</option>
                                                                        <option value="page-9">9</option>
                                                                        <option value="page-10">10</option>
                                                                        <option value="page-11">11</option>
                                                                        <option value="page-12">12</option>
                                                                        <option value="page-13">13</option>
                                                                        <option value="page-14">14</option>
                                                                        <option value="page-15">15</option>
                                                                        <option value="page-16">16</option>
                                                                        <option value="page-17">17</option>
                                                                        <option value="page-18">18</option>
                                                                        <option value="page-19">19</option>
                                                                        <option value="page-20">20</option>
                                                                    </select>
                                                                </div>
                                                                <div>OF 102</div>
                                                            </div>
                                                        </div>{/* .pagination-goto */}
                                                    </div>{/* .nk-block-between */}
                                                </div>
                                            </div>

                                        </div>{/* .nk-block */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                </Container>
            }
        </>
    );
}

export default Products;

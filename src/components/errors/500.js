import React from "react";

const InternalServerError = (props) => {
    return(

        <div class="my-5 pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mb-5 pt-5">
                            <h1 class="error-title mt-5"><span>500!</span></h1>
                            <h4 class="text-uppercase mt-5">Internal Server Error</h4>
                            <p class="font-size-15 mx-auto text-muted w-50 mt-4">It will be as simple as Occidental in fact, it will Occidental to an English person</p>
                            <div class="mt-5 text-center">
                            <span class="btn btn-primary waves-effect waves-light" onClick={() => props.history.goBack()}>Back to Dashboard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default InternalServerError;
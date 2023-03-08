import React from 'react'

const Header = (props) => {
  return (
    <>
        <section className="values">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        {
                            props?.title && (
                                <h5>{props.title}</h5>
                            )
                        }
                        {
                            props?.description && (
                                <p className='text-center'>
                                    {props.description}
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header
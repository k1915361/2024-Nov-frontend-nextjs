import PageComponent from "@/app/page_component"

export function ColBorderLightSubtleMinHeight({children, ...props}) {
  return (
    <div 
      className="col p-1 bg-body-tertiary rounded border border-light-subtle" 
      style={{minHeight: "30vh"}}
      {...props}
    >
      {children}
    </div>    
  )
}

export function RowMargin1({children, ...props}) {
  return (
    <div 
      className="row m-1" 
      {...props}
    >
      {children}
    </div>    
  )
}

export function Col({children, ...props}) {
  return (
    <div 
      className="col" 
      {...props}
    >
      {children}
    </div>    
  )
}

export function BtnPrimary({children, ...props}) {
  return (
    <button 
      className="btn btn-primary" 
      {...props}
    >
      {children}
    </button>    
  )
}

export default async function Page({
  params,
}) {
  
  const id = (await params).id
  
  return (
    <PageComponent>
      <div className="row p-1 mb-1 bg-body-tertiary rounded border border-light-subtle">
          <h5>Dataset {id} - Analysis</h5>
      </div>
      <div className="row row-cols-3 gap-0">
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>
          </ColBorderLightSubtleMinHeight>
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>
          </ColBorderLightSubtleMinHeight>
          <div className="col p-1 mb-1">
              <Col>
                  <RowMargin1>
                      <BtnPrimary>Action 01</BtnPrimary>
                  </RowMargin1>
                  <RowMargin1>
                      <BtnPrimary>Action 02</BtnPrimary>
                  </RowMargin1>
              </Col>
          </div>
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>
          </ColBorderLightSubtleMinHeight>
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>
          </ColBorderLightSubtleMinHeight>
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>
          </ColBorderLightSubtleMinHeight>
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>
          </ColBorderLightSubtleMinHeight>
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>
          </ColBorderLightSubtleMinHeight>
          <ColBorderLightSubtleMinHeight>
              <div>Visualisation</div>            
          </ColBorderLightSubtleMinHeight>
      </div>  
    </PageComponent>
  )
}
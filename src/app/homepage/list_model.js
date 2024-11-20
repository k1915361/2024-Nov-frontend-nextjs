import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Homepage(props) {
    const model_page_obj = props.model_page_obj.response_body.model

    return (
        <div>
            <ul>
                { model_page_obj.map(model => 
                    <li key={ model.id } className="whiteSpace-nowrap" >
                        <a className="fw-semibold" temphref="url 'polls:public-model-data-view/?page=' data.id" href="#">{ model.name }</a>
                        <span>
                            <span className="fw-medium"> • { model.user.username }</span> 
                            <span className="text-body-secondary text-sm"> • { dayjs(model.updated).fromNow(true) } ago</span>
                        </span>
                    </li>
                    )
                }
            </ul>
        { 
            !model_page_obj &&          
                <p>No model are available.</p>
        }
        </div>
    )
}
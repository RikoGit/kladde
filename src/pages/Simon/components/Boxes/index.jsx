import React from 'react';
import cn from 'classnames';
// import { connect } from 'react-redux';

// import { mouseDownBoxHandler, mouseUpBoxHandler } from '../../actions.js';
// import boxesData from './boxesData.js';
import styles from './styles.css';

/* eslint-disable jsx-a11y/no-static-element-interactions */

const Boxes = ({ boxes, dispatchMouseDownBoxHandler, dispatchMouseUpBoxHandler }) => (
    <div className={styles.container}>
        {boxes.map(box => (
            <div
                className={cn(
                    styles.box,
                    styles[`box_type_${box.type}`],
                    box.isActive ? styles.box_state_active : '',
                )}
                onMouseDown={() => dispatchMouseDownBoxHandler(box.id)}
                onMouseUp={() => dispatchMouseUpBoxHandler(box.id)}
            />
        ))}
    </div>
);

// const mapStateToProps = state => state;

export default Boxes;

// export default connect(mapStateToProps, {
//     dispatchMouseDownBoxHandler: mouseDownBoxHandler,
//     dispatchMouseUpBoxHandler: mouseUpBoxHandler,
// })(Boxes);

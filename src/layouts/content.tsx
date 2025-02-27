import React from 'react'
import { IRouteComponentProps, withRouter } from 'umi'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './global.less'

const classMap: Record<string, string> = {
  PUSH: 'forward',
  POP: 'back',
}

export default withRouter(({ location, children, history }: IRouteComponentProps) => {
  return (
    <TransitionGroup
      className={styles.content}
      childFactory={
        (child: React.FunctionComponentElement<{ classNames: any; }>) => React.cloneElement(child, { classNames: classMap[history.action] })
      }
    >
      <CSSTransition key={location.pathname} timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
})
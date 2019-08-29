import React from 'react'
import PropTypes from 'prop-types'

import styles from './circle.css'

const CircleProgress = ({
  percentage,
  width,
  strokeWidth,
  fontSize,
  fontColor,
  fontFamily,
  primaryColor,
  secondaryColor,
  fill,
  hidePercentageText
}) => {
  const PI = 3.14

  const R = (width / 2) - (strokeWidth * 2)
  let circumference = 2 * PI * R
  let offset = circumference - percentage / 100 * circumference
  let gradientId = `${primaryColor[0]}${primaryColor[1]}`.replace(/#/g, '')
  return (
    <div
      className={styles.reactGradientProgress}
      style={{
        height: `${width}px`,
        width: `${width}px`,
      }}
    >
      {!hidePercentageText ?
        <div id={styles.reactGradientProgressPercentage}>
          <span
            className={styles.reactGradientProgressPercentageSpan}
            style={{
              fontSize,
              fontFamily,
              color: fontColor,
            }}
          >
            {percentage}%
        </span>
        </div>
        : null
      }

      <svg
        className={styles.progressCircle}
        width='100%'
        height='100%'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <linearGradient
          id={gradientId}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'
        >
          <stop offset='0%' stopColor={primaryColor[0]} />
          <stop offset='100%' stopColor={primaryColor[1]} />
        </linearGradient>
        <circle
          strokeWidth={strokeWidth}
          fill='transparent'
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={secondaryColor}
          strokeDasharray={`${circumference} ${circumference}`}
        />
        <circle
          className={styles.progressCircleBar}
          strokeWidth={strokeWidth}
          fill={fill}
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={`url(#${gradientId})`}
          strokeLinecap='round'
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  )
}

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  primaryColor: PropTypes.array,
  secondaryColor: PropTypes.string,
  fill: PropTypes.string,
  hideText: PropTypes.bool
}

CircleProgress.defaultProps = {
  width: 200,
  strokeWidth: 5,
  fontSize: '30px',
  fontColor: 'inherit',
  fontFamily: 'inherit',
  primaryColor: ['#00BBFF', '#92d7f1'],
  secondaryColor: 'transparent',
  fill: 'transparent'
}

export default CircleProgress

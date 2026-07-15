import React from 'react'

const Even = () => {
    const numbers = [12, 15, 20, 33, 44, 51, 60]

    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
            sum = sum + numbers[i];
        }
    }
    return (
        <div>
            total Even numbers:{count}
            sum:{sum}

        </div>
    )
}

export default Even

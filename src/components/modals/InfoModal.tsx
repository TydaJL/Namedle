import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="Y" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell 
        isRevealing={true}
        isCompleted={true}
        value="A"
        status="present"
        />
        <Cell value="V" />
        <Cell value="I" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="A" />
        <Cell value="M" />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter E is not in the name in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love.
        <br></br>
        <br></br>
        Code of Namedle:
        {' '}
        <a
          href="https://github.com/TydaJL/Namedle"
          className="underline font-bold"
        >
          Check out the code here!
        </a>{' '}

        <br></br>
        <br></br>
        Forked from 
        {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          React Wordle
        </a>{' '}

        <br></br>
        <br></br>

        Created by Tyler Lam
      </p>
    </BaseModal>
  )
}

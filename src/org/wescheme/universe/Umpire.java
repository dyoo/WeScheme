package org.wescheme.universe;

/*
 * An umpire monitors a game and judges the moves made by each player.
 * 
 * Assumption: given a sequence of moves, it's unambiguous how to reconstruct the game.
 *
 */

import java.util.List;

public interface Umpire {
	
	/* Returns a list of the moves made so far. */
	List<String> getMoves();
	
	/* Returns true if the game's over, false otherwise. */
	boolean isGameOver();
	
	/* Returns who wins a game.  Should throw a runtime exception if the game isn't over yet. */
	Player whoWins();

	/* Returns whose turn it is. */
	Player whoseTurn();

	/* Returns true if the proposed next move is legal, if the player whose turn it is makes it. */
	boolean isLegalNextMove(String move);
	
	/* Creates an updated Umpire that knows the next move has been made. */
	Umpire consume(String move);	
}

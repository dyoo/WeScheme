package org.wescheme.universe.ttt;

import org.wescheme.universe.Player;
import org.wescheme.universe.Umpire;

import junit.framework.TestCase;

public class TicTacToeUmpireTest extends TestCase {
	Umpire ttt;
	
	
	public void setUp() {
		this.ttt = new TicTacToeUmpire();
	}
	
	public void testLegalMove1() {
		assertTrue(ttt.isLegalNextMove("0"));
		assertTrue(ttt.isLegalNextMove("8"));
		assertFalse(ttt.isLegalNextMove("blah"));
		assertFalse(ttt.isLegalNextMove("9"));
	}

	public void testLegalMove2() {
		assertTrue(ttt.isLegalNextMove("5"));
		ttt = ttt.consume("5");
		assertFalse(ttt.isLegalNextMove("5"));
	}
	
	public void makeAMove() {
		assertTrue(ttt.isLegalNextMove("0"));
		ttt = ttt.consume("0");
		assertFalse(ttt.isLegalNextMove("0"));
	}
	
	public void testWhoseTurn() {
		assertEquals(Player.PLAYER1, ttt.whoseTurn());
		ttt = ttt.consume("0");
		assertEquals(Player.PLAYER2, ttt.whoseTurn());
		ttt = ttt.consume("4");
		assertEquals(Player.PLAYER1, ttt.whoseTurn());
	}
	
	public void testIsGameOver1() {
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("0");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("1");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("3");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("4");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("6");
		assertTrue(ttt.isGameOver());
		assertEquals(Player.PLAYER1, ttt.whoWins());
	}

	public void testIsGameOver2() {
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("1");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("0");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("2");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("4");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("3");
		assertFalse(ttt.isGameOver());
		ttt = ttt.consume("8");
		assertTrue(ttt.isGameOver());
		assertEquals(Player.PLAYER2, ttt.whoWins());
	}
	
	public void getMoves() {
		String[] moves = {"1", "0", "2", "4", "3", "8"};
		for(int i = 0; i < moves.length; i++) {
			ttt = ttt.consume(moves[i]);
		}
		assertEquals(moves.length, ttt.getMoves().size());

		for(int i = 0; i < moves.length; i++)
			assertEquals(moves[i], ttt.getMoves().get(i));
	}

}
